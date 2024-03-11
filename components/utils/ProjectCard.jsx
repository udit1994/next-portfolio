import { clsx } from "clsx"
import { RelativeDate } from "./RelativeDate"


/**
 * Display a personal project.
 *
 * @param props - A set of `div` props.
 * @param [props.children] - The card's content.
 * @param [props.className] - A list of one or more classes.
 */
export function ProjectCard({
  className,
  children,
  ...props
}) {
  return (
    <div
      className={clsx(
        className,
        "relative flex flex-col rounded-lg border border-zinc-150 p-6 dark:border-zinc-800 sm:p-8"
      )}
      {...props}
    >
      {children}
    </div>
  )
}

/**
 * Display a GitHub repository's creation date.
 *
 * @param props - A set of `span` props.
 * @param props.date - The project's creation date.
 */
export function ProjectCardDate({ date, ...props }) {
  return (
    <span {...props}>
      <RelativeDate date={date} />
    </span>
  )
}
