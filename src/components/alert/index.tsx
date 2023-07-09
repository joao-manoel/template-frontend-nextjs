type AlertProps = {
  message: string | undefined
}

export function Alert({ message }: AlertProps) {
  return (
    <>
      {message && (
        <div
          className="
          flex justify-center py-2 font-extralight
          bg-red-200  dark:bg-red-500 text-gray-900 dark:text-red-200
          rounded-md
      "
        >
          <span>{message}</span>
        </div>
      )}
    </>
  )
}
