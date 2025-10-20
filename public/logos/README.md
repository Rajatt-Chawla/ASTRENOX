# AI Provider & Technology Logos

This folder contains logos for AI providers and orchestration tools displayed in the Technology Ecosystem section.

## ⚠️ PLACEHOLDER LOGOS INCLUDED

The current SVG files are **text-based placeholders**. For the best visual experience, replace them with the actual brand logos from the sources below.

## Required Logo Files

### Foundation Model Providers (2x2 Grid)

1. **openai.svg** - OpenAI logo
   - Source: https://www.webfx.com/wp-content/uploads/2023/07/what-is-openai.png
   - Convert to SVG or use as PNG
   - Recommended size: 200x200px minimum
   - Format: SVG preferred (or PNG with transparent background)

2. **anthropic.svg** - Anthropic (Claude) logo
   - Source: https://www.malwarebytes.com/wp-content/uploads/sites/2/2025/08/Claude_logo.png
   - Convert to SVG or use as PNG
   - Recommended size: 200x200px minimum
   - Format: SVG preferred (or PNG with transparent background)

3. **google.svg** - Google (Gemini) logo
   - Source: https://www.gstatic.com/lamda/images/gemini_aurora_thumbnail_4g_e74822ff0ca4259beb718.png
   - Convert to SVG or use as PNG
   - Recommended size: 200x200px minimum
   - Format: SVG preferred (or PNG with transparent background)

4. **meta.svg** - Meta logo
   - Source: https://www.behance.net/gallery/130735783/Meta-logo
   - Get official Meta logo SVG
   - Recommended size: 200x200px minimum
   - Format: SVG preferred (or PNG with transparent background)

### Orchestration & Integration Tools

5. **langgraph.svg** - LangGraph logo
   - Source: Search for official LangChain/LangGraph branding
   - Recommended size: 150x150px minimum
   - Format: SVG preferred

6. **crewai.svg** - CrewAI logo
   - Source: Search for official CrewAI branding
   - Recommended size: 150x150px minimum
   - Format: SVG preferred

7. **n8n.svg** - n8n logo
   - Source: https://n8n.io or official n8n GitHub
   - Recommended size: 150x150px minimum
   - Format: SVG preferred

## Logo Specifications

- **File Format**: SVG preferred (scales perfectly), PNG with transparent background as fallback
- **Color Mode**: Support dark backgrounds (white or light-colored logos work best)
- **Naming**: Use lowercase with no spaces (e.g., `openai.svg`, `meta.svg`)
- **Optimization**: Optimize SVGs and compress PNGs for web

## Quick Setup

1. Download logos from the sources above
2. Convert to SVG if needed (use tools like CloudConvert, Figma, or Illustrator)
3. Optimize SVGs using SVGO or similar tools
4. Place files in this `/public/logos/` directory
5. Ensure filenames match exactly:
   - `openai.svg`
   - `anthropic.svg`
   - `google.svg`
   - `meta.svg`
   - `langgraph.svg`
   - `crewai.svg`
   - `n8n.svg`

## Alternative: Use PNG

If SVG is not available, you can use PNG files instead. Just rename the extensions in:
`src/components/sections/TechnologyEcosystem.tsx`

Change `.svg` to `.png` in the logo paths.

## Licensing

Ensure you have the right to use these logos. Most companies provide official brand assets for use in "technology partner" contexts. Check each company's brand guidelines.

