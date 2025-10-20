# Noupe Chatbot Setup Guide

## ✅ Installation Complete

The Noupe chatbot widget has been integrated into your site at the layout level.

## 📋 Configuration Steps

### 1. Get Your Noupe Bot ID

1. Go to your [Noupe Dashboard](https://dashboard.noupe.ai)
2. Navigate to: **Train → Customize → Get Your Code**
3. Copy your Bot ID (looks like: `abc123def456`)

### 2. Set Environment Variable

Create a `.env.local` file in the root of your project (if it doesn't exist):

```bash
# .env.local
NEXT_PUBLIC_NOUPE_BOT_ID=YOUR_BOT_ID_HERE
```

Replace `YOUR_BOT_ID_HERE` with your actual Bot ID from step 1.

**Example:**
```bash
NEXT_PUBLIC_NOUPE_BOT_ID=abc123def456
```

### 3. Restart Dev Server

After adding the environment variable, restart your development server:

```bash
npm run dev
```

## 🎨 Widget Configuration

The widget is configured with:
- **Theme**: Dark (matches your site)
- **Color**: #22d3ee (cyan - matches your brand gradient)
- **Position**: Bottom-right
- **Label**: "Chat with Astrenox"
- **z-index**: 60 (above most content, below modals)

## 📁 Files Added/Modified

### New Files:
- `src/components/NoupeWidget.tsx` - The chatbot component
- `NOUPE_SETUP.md` - This setup guide

### Modified Files:
- `src/app/layout.tsx` - Added NoupeWidget import and mounting

## 🚀 How It Works

The widget:
1. **Loads lazily** after page idle using `requestIdleCallback` (doesn't block LCP)
2. **Renders nothing** (invisible React component that just injects the script)
3. **Has a fallback** for users with JavaScript disabled (shows contact link)
4. **Auto-cleans up** when component unmounts
5. **Appears on all pages** (mounted at layout level)

## 🧪 Testing

1. **Desktop**: Check bottom-right corner for chat button
2. **Mobile**: Verify it doesn't overlap footer content
3. **No-JS**: Disable JavaScript to see fallback contact link
4. **Performance**: Check Lighthouse - widget loads after idle

## 🎨 Customization

To change widget settings, edit `src/components/NoupeWidget.tsx`:

```typescript
s.setAttribute("data-theme", "dark")           // "dark" or "light"
s.setAttribute("data-color", "#22d3ee")       // Any hex color
s.setAttribute("data-position", "bottom-right") // bottom-right, bottom-left
s.setAttribute("data-label", "Chat with Astrenox") // Button text
```

## ⚠️ Important Notes

1. **Environment Variable**: Make sure `.env.local` is in `.gitignore` (it should be by default)
2. **Production**: Add `NEXT_PUBLIC_NOUPE_BOT_ID` to your hosting platform's environment variables
3. **Bot ID**: Never commit your actual Bot ID to version control
4. **Fallback**: The no-JS fallback links to `Prajwal@astrentech.com` - update if needed

## 🔧 Troubleshooting

### Widget not appearing?
1. Check if `NEXT_PUBLIC_NOUPE_BOT_ID` is set correctly
2. Restart dev server after adding environment variable
3. Check browser console for errors
4. Verify Bot ID is correct in Noupe dashboard

### Widget overlapping content?
1. Adjust z-index in the component
2. Add custom CSS to adjust positioning
3. Check mobile viewport

### Performance issues?
1. Widget loads after idle by default (optimized)
2. Check Network tab - should load after main content
3. Verify `defer` attribute is present on script

## 📞 Support

If you need help:
- Noupe Dashboard: [https://dashboard.noupe.ai](https://dashboard.noupe.ai)
- Noupe Docs: Check their documentation for advanced features
- Component Location: `src/components/NoupeWidget.tsx`

## 🎉 You're Done!

Once you add your Bot ID to `.env.local`, the chatbot will be live on your site!

