import type { ComponentProps } from 'react';
export function Card({children,...props}:ComponentProps<'article'>){return <article {...props}>{children}</article>}
