import React, { lazy } from "react";
import { styles } from "./styles.js";
const ProductList = lazy(() => import("ProductList/App"));

export default function App() {
  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1>BestProducts</h1>
        <nav style={styles.navLinks}>
          <a href="#" style={styles.link}>
            Home
          </a>
          <a href="#" style={styles.link}>
            About
          </a>
          <a href="#" style={styles.link}>
            Services
          </a>
          <a href="#" style={styles.link}>
            Contact
          </a>
        </nav>
      </header>

      {/* Body */}
      <div style={styles.body}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <h3>Sidebar</h3>
          <a href="#" style={styles.sidebarLink}>
            Dashboard
          </a>
          <a href="#" style={styles.sidebarLink}>
            Profile
          </a>
          <a href="#" style={styles.sidebarLink}>
            Settings
          </a>
          <a href="#" style={styles.sidebarLink}>
            Logout
          </a>
        </aside>

        {/* Main Content */}
        <main style={styles.main}>
          <h2>Browse our amazing products</h2>
          <ProductList />
        </main>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <span>© 2026 BestProducts</span>
        <div style={styles.footerLinks}>
          <a href="#" style={styles.footerLink}>
            Privacy
          </a>
          <a href="#" style={styles.footerLink}>
            Terms
          </a>
          <a href="#" style={styles.footerLink}>
            Support
          </a>
        </div>
      </footer>
    </div>
  );
}
