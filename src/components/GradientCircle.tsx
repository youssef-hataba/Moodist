"use client";

import React from "react";

interface GradientCircleProps {
  size?: number;
  color?: string;
  opacity?: number;
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
  zIndex?: number;
}

export const GradientCircle: React.FC<GradientCircleProps> = ({
  size = 500,
  color = "#e10000",
  opacity = 0.5,
  top,
  left,
  bottom,
  right,
  zIndex = 0,
}) => {
  const style: React.CSSProperties = {
    position: "absolute",
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: "50%",
    background: `radial-gradient(circle, ${color}${Math.floor(opacity * 100).toString(16)} 0%, ${color}20 70%, ${color}15 100%)`,
    opacity,
    pointerEvents: "none",
    zIndex,
    top,
    left,
    bottom,
    right,
    boxShadow: `
      0 0 200px ${color}1a,
      0 0 300px ${color}12,
      0 0 400px ${color}0d,
      0 0 500px ${color}08,
      0 0 600px ${color}03
    `,
  };

  return <div style={style} />;
};
