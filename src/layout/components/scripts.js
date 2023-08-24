import Script from "next/script";

export default function AllScripts() {
  return (
    <>
      <Script
        rel="preload"
        src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"
        as="script"
        type="text/javascript"
      />
      <Script
        src="/scripts/particlescdn.js"
        as="script"
        type="text/javascript"
      />
      <Script src="/scripts/particles.js" as="script" type="text/javascript" />
      <Script src="/scripts/parallax.js" as="script" type="text/javascript" />
    </>
  );
}
