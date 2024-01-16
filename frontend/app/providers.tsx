// app/providers.tsx
"use client";

import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <I18nextProvider i18n={i18n}>

        {children}
        </I18nextProvider>
      </NextThemesProvider>
    </NextUIProvider>
  )
}