import React from 'react';

/**
 *
 * @param {{
 * href: string;
 * children: React.Children}} props
 */
export default function ExternalLink({ href, children, ...rest }) {
  return (
    <a href={href} rel="noreferrer noopener" target="_blank" {...rest}>
      {children}
    </a>
  );
}
