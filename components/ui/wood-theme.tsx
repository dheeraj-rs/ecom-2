"use client";

export const woodTheme = {
  colors: {
    // Primary wood tones
    primary: {
      50: '#FDF7F0',
      100: '#FAEBD7',
      200: '#F5DEB3',
      300: '#DEB887',
      400: '#CD853F',
      500: '#8B4513',
      600: '#A0522D',
      700: '#8B4513',
      800: '#654321',
      900: '#3E2723',
    },
    // Warm secondary
    secondary: {
      50: '#FFF8E1',
      100: '#FFECB3',
      200: '#FFE082',
      300: '#FFD54F',
      400: '#FFCA28',
      500: '#FFC107',
      600: '#FFB300',
      700: '#FFA000',
      800: '#FF8F00',
      900: '#FF6F00',
    },
    // Rich accent
    accent: {
      50: '#F3E5F5',
      100: '#E1BEE7',
      200: '#CE93D8',
      300: '#BA68C8',
      400: '#AB47BC',
      500: '#9C27B0',
      600: '#8E24AA',
      700: '#7B1FA2',
      800: '#6A1B9A',
      900: '#4A148C',
    }
  },
  gradients: {
    wood: 'linear-gradient(135deg, #8B4513 0%, #A0522D 50%, #CD853F 100%)',
    warm: 'linear-gradient(135deg, #FFF8E1 0%, #FFE082 100%)',
    rich: 'linear-gradient(135deg, #3E2723 0%, #8B4513 100%)',
  },
  shadows: {
    wood: '0 4px 20px rgba(139, 69, 19, 0.15)',
    warm: '0 2px 10px rgba(205, 133, 63, 0.1)',
    rich: '0 8px 32px rgba(62, 39, 35, 0.2)',
  }
};