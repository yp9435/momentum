import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Momentum",
  description:
    "Discover & Share habit-building strategies, personal growth experiments, and success stories to inspire and support your self-improvement journey.",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <Provider>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; Yeshaswi Prakash 2024</p>
        </footer>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
