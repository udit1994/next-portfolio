"use client"

import { formatDistanceToNowStrict } from "date-fns"
import { useMemo } from "react"
import { capitalize } from "./capitalize"


/**
 * Display a relative date.
 *
 * @param props - A set of `time` props.
 * @param props.date - The date to display.
 */
export function RelativeDate({ date, ...props }) {
  const parsedDate = useMemo(() => new Date(date), [date])
  const normalizedDate = useMemo(() => parsedDate.toISOString(), [parsedDate])
  const formattedDate = useMemo(() => {
    return `${capitalize(formatDistanceToNowStrict(parsedDate))} ago`
  }, [parsedDate])

  return (
    <time {...props} dateTime={normalizedDate}>
      {formattedDate}
    </time>
  )
}
