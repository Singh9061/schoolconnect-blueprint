<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep public school pages in separate TanStack leaf routes with shared school chrome; this preserves navigation and page-specific metadata.
- Store inquiries and admissions through validated public server functions with insert-only privileged processing and private documents; public visitors must never read submissions.
- Centralize school design in semantic CSS tokens and use the existing Button component; this keeps the visual identity consistent.
- Treat SStudy, fee payment and school-map destinations as unavailable until school-verified configuration is supplied; this avoids invented services and location data.
