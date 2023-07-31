import { useState } from "react";
export default function Iframe({ url, Key, className }) {
  const [HTML, setHTML] = useState(localStorage.getItem(`Cached-${Key}`));
  if (!localStorage.getItem(`Cached-${Key}`) && !HTML) {
    const data = fetch(url);
    data.then((v) => {
      v.text().then((v) => {
        setHTML(v);

        localStorage.setItem(`Catched-${Key}`, HTML);
      });
    });
  }
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: !HTML ? "<p>Loading...</p>" : HTML }}
    ></div>
  );
}
