export default function Contact() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Contact Graham Rogers</h1>
      <form
        action="https://formspree.io/f/xvgwbyag"
        method="POST"
        style={{ display: "flex", flexDirection: "column", maxWidth: "400px" }}
      >
        <label>First Name:</label>
        <input type="text" name="firstName" required />

        <label>Last Name:</label>
        <input type="text" name="lastName" required />

        <label>Email:</label>
        <input type="email" name="email" required />

        <label>Message:</label>
        <textarea name="message" rows={4} required></textarea>

        <button type="submit" style={{ marginTop: "10px" }}>Send</button>
      </form>
    </div>
  );
}
