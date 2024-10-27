import React from "react";
import { useState } from 'react';

function Panel({ title, children , isActive,onShow}) {
 
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}

export default function About() {
  const [active,setActive]=useState(0);
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel title="About" children='With a population of about 2 million, Almaty is Kazakhstans largest city From 1929 to 1997, it was its capital city' isActive={active===0} onShow={()=>setActive(0)}>
        
      </Panel>
      <Panel title="Etymology" children='With  to 1997, it was its capital city' isActive={active===1} onShow={()=>setActive(1)}>
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}

