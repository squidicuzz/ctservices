import Script from "next/script";

export default function AllScripts() {
  return (
    <>
      <Script
        src="/scripts/particlescdn.js"
        as="script"
        type="text/javascript"
      />
      <Script src="/scripts/particles.js" as="script" type="text/javascript" />
    </>
  );
}
