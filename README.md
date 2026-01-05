# mkdocs-amyy

An mkdocs theme for amyy's (that's me!) projects.

## Installation

The project can be added to an mkdocs project as normal, outside of needing to
add a PIP package from either a local directory or Git pathing.

The only option that can be adjusted is `fit_to_height`, which controls whether
to stretch the center box to the top of the screen or not. It is also
recommended to make the first-level options in navigation to be links, as there
is no expanded table of contents available.

## Quirks

This theme is not intended for public consumption. That is, while it does
function and can work on hypothetically any mkdocs project, it is not well
configured for use with anything not build specifically for it.

For example:

- Favicon, web manifests, and other details are hard-coded into the HTML
- Colors cannot be adjusted
- The table of contents is not well made, with many hard-coded elements
- Other issues I haven't noticed
