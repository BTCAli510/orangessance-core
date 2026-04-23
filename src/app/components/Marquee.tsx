export default function Marquee() {
  const items = [
    "Culture Without Tech Can't Scale",
    "Tech Without Culture Can't Onboard Everyone",
    "Power to the People. Onchain.",
    "Oakland · Boston · Everywhere",
    "BASE Oakland bloc · Coalition 001",
  ];

  // Double for seamless loop
  const doubled = [...items, ...items];

  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: "1px solid #E8E8E4",
        borderBottom: "1px solid #E8E8E4",
        padding: "18px 0",
        background: "#F5F5F2",
      }}
    >
      <div
        className="marquee-track"
        style={{ display: "flex", gap: "60px", whiteSpace: "nowrap" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: "#666",
              flexShrink: 0,
              display: "inline-flex",
              alignItems: "center",
              gap: "30px",
            }}
          >
            {item}
            <span
              style={{
                width: "5px",
                height: "5px",
                background: "#F7931A",
                borderRadius: "50%",
                display: "inline-block",
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
