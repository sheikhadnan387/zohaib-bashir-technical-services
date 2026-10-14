import { ImageResponse } from "next/og";
import { company } from "@/lib/company";

export const alt = `${company.legalName} — Technical Services Dubai`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #0b0d0f 0%, #15191d 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 22, letterSpacing: 6, color: "#f97316" }}>
          <div style={{ width: 40, height: 2, background: "#f97316" }} />
          TECHNICAL SERVICES • DUBAI
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
            {company.legalName}
          </div>
          <div style={{ fontSize: 30, color: "rgba(255,255,255,0.75)" }}>
            AC repair · Painting · Sofa &amp; carpet cleaning · Flooring
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "rgba(255,255,255,0.7)" }}>
          <div>{company.phoneDisplay}</div>
          <div>{`Licensed · No. ${company.licenseNo}`}</div>
        </div>
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 10, background: "#f97316" }} />
      </div>
    ),
    size
  );
}
