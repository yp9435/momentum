"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation"; // Ensure you're using next/navigation

import Form from "@components/Form";

const UpdatePrompt = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id"); // Get 'id' from query params

  const [post, setPost] = useState({ prompt: "", tag: "" });
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Only fetch data if promptId is available
    const getPromptDetails = async () => {
      if (!promptId) return; // Ensure promptId is available before fetching

      try {
        const response = await fetch(`/api/prompt/${promptId}`);
        const data = await response.json();

        setPost({
          prompt: data.prompt,
          tag: data.tag,
        });
      } catch (error) {
        console.error("Failed to fetch prompt details:", error);
      }
    };

    // Run getPromptDetails only if promptId exists
    if (promptId) {
      getPromptDetails();
    }
  }, [promptId]);

  const updatePrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!promptId) {
      alert("Missing PromptId!");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/"); // Navigate back to homepage after updating
      } else {
        console.error("Failed to update the prompt");
      }
    } catch (error) {
      console.error("Error updating prompt:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  );
};

export default UpdatePrompt;
