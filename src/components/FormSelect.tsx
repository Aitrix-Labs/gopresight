import { useEffect, useId, useRef, useState } from 'react'

type FormSelectProps = {
  name: string
  label: string
  options: string[]
  placeholder?: string
  required?: boolean
  className?: string
}

export default function FormSelect({
  name,
  label,
  options,
  placeholder = 'Please Select',
  required = false,
  className,
}: FormSelectProps) {
  const id = useId()
  const rootRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  useEffect(() => {
    if (!open) return

    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <label className={className}>
      {label}
      <div className={`form-select${open ? ' is-open' : ''}`} ref={rootRef}>
        <select
          className="form-select__native"
          name={name}
          value={value}
          required={required}
          tabIndex={-1}
          aria-hidden="true"
          onChange={() => {}}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button
          type="button"
          id={id}
          className={`form-select__trigger${value ? '' : ' is-placeholder'}`}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={`${id}-list`}
          onClick={() => setOpen((current) => !current)}
        >
          {value || placeholder}
        </button>
        {open ? (
          <ul className="form-select__list" id={`${id}-list`} role="listbox">
            {options.map((option) => (
              <li key={option} role="option" aria-selected={option === value}>
                <button
                  type="button"
                  className={option === value ? 'is-active' : undefined}
                  onClick={() => {
                    setValue(option)
                    setOpen(false)
                  }}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </label>
  )
}
