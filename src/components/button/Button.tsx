import clsx from "clsx";
import Link from "next/link";

enum ButtonVariant {
  "primary",
  "secondary",
}

type ButtonProps = {
  text: string;
  href?: string;
  variant?: keyof typeof ButtonVariant;
};

export const Button = ({
  text,
  href = "",
  variant = "primary",
}: ButtonProps) => {
  return (
    <Link href={href}>
      <a target={href ? "_blank" : "_self"}>
        <div
          className={clsx("mr-5 rounded-lg font-semibold text-sm", {
            "text-raulDark-500 hover:underline transition-transform":
              variant === "primary",
            "bg-raulDark text-white px-5 py-2 hover:bg-raulDark-500":
              variant === "secondary",
          })}
        >
          {text}
        </div>
      </a>
    </Link>
  );
};
