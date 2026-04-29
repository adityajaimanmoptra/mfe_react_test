const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    transition: "0.2s",
  },
  cardHover: {
    transform: "translateY(-5px)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
  },
  content: {
    padding: "15px",
    flex: 1,
  },
  price: {
    fontWeight: "bold",
    marginTop: "10px",
  },
  button: {
    marginTop: "10px",
    padding: "8px",
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px",
  },
};

export { styles };
