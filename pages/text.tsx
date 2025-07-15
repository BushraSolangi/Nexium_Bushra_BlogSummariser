// pages/test.tsx
export default function TestPage() {
  const testTranslate = async () => {
    const res = await fetch("/api/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ paragraph: "یہ ایک اچھا مضمون ہے" }),
    });

    const data = await res.json();
    console.log("Response from API:", data);
  };

  return (
    <button onClick={testTranslate}>
      Test API
    </button>
  );
}
