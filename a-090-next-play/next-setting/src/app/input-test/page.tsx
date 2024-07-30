'use client';

import { useState } from 'react';

export default function InputTestPage() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>
      <button type="button" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}
