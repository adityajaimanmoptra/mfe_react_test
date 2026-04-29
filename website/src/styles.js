const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "15px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navLinks: {
    display: "flex",
    gap: "15px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "14px",
  },
  body: {
    display: "flex",
    flex: 1,
  },
  sidebar: {
    width: "220px",
    backgroundColor: "#f4f4f4",
    padding: "20px",
    borderRight: "1px solid #ddd",
  },
  sidebarLink: {
    display: "block",
    marginBottom: "10px",
    color: "#333",
    textDecoration: "none",
  },
  main: {
    flex: 1,
    padding: "20px",
  },
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
  },
  footerLinks: {
    display: "flex",
    gap: "10px",
  },
  footerLink: {
    color: "#ccc",
    textDecoration: "none",
    fontSize: "13px",
  },
};

export { styles };
