"use client";

const styles = new Map([
  ["primary", "btn-primary text-white"],
  ["secondary", "btn-secondary text-white"],
  ["default", "btn-default"],
]);

export default function Button({ children, style, ...props }) {
  return (
    <button
      {...props}
      className={`btn  rounded-full ${
        styles.get(style) ?? styles.get("default")
      }`}
    >
      {children}
    </button>
  );
}
