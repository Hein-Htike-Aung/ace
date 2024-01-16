// i18n.js
"use client"
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
        // Login and register
         username: "Username",
         password: "Password",
         agent_code: "Agent Code",
         sign_in: "Sign In",
         sign_up: "Sign Up",

        // Aside bar and navbar
          dashboard: "Dashboard",
          users: "Users",
          agents: "Agents",
          register_requests: "Register Requests",
          point_requests: "Point Requests",
          transfer_points: "Transfer Points",
          results: "Results",
          brake: "Brake",

        // Profile
          profile: "View Profile",
          logout: "Log out",

        // Dashboard
          points: "Points",
          rating: "Rating",
          rewards: "Rewards",
          top_users: "Top users",
          prizes: "Prizes",
          winners: "Winners",
          total: "Total",
          draw_no: "Draw No.",
          bet_users_list: "Bet Users List",

        // Tables
          search: "Search by name...",
          create: "Create",
          export: "Export",
          columns: "Columns",
          uid: "UID",
          name: "NAME",
          phone: "PHONE",
          points_t: "POINTS",
          active: "ACTIVE",
          created_time: "CREATED",
          last_seen: "LAST SEEN",
          actions: "ACTIONS"
        },
      },

      mm: {
        translation: {
            // Login and register
          username: "အမည်",
          password: "လျှို့ဝှက်ကုဒ်",
          agent_code: "အေဂျင့်ကုဒ်",
          sign_in: "ဝင်မည်",
          sign_up: "မှတ်ပုံတင်မည်",

        // Aside bar and navbar
          dashboard: "ဒက်ရှ်ဘုတ်",
          users: "အသုံးပြုသူများ",
          agents: "အေဂျင့်များ",
          register_requests: "မှတ်ပုံတင်ရန်တောင်းဆိုမှုများ",
          point_requests: "အမှတ်တောင်းဆိုမှုများ",
          transfer_points: "အမှတ်များလွှဲပြောင်းခြင်း",
          results: "ရလာဒ်များ",
          brake: "ဘရိတ်",

        // Profile
          profile: "ပရိုဖိုင်း",
          logout: "ထွက်မည်",

        // Dashboard
          points: "အမှတ်များ",
          rating: "အဆင့်",
          rewards: "ဆုလာဘ်များ",
          top_users: "ထိပ်တန်းအသုံးပြုသူများ",
          prizes: "ဆုကြေးများ",
          winners: "အနိုင်ရရှိသူများ",
          total: "စုစုပေါင်း",
          draw_no: "အပတ်စဉ်.",
          bet_users_list: "အသုံးပြုသူများစာရင်း",

        // Tables
          search: "နာမည်ဖြင့်ရှာမည်...",
          create: "အသစ်",
          export: "ထုတ်မည်",
          columns: "ကော်လံများ",
          uid: "အိုင်ဒီ",
          name: "နာမည်",
          phone: "ဖုန်း",
          points_t: "အမှတ်",
          active: "ACTIVE",
          created_time: "စတင်ချိန်",
          last_seen: "နောက်ဆုံး",
          actions: "လုပ်ဆောင်ချက်"
        },
      },
      
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safe from xss
    },
  });

export default i18n;
