import TextField from '@material-ui/core/TextField'
import React from 'react'
import { IMaskMixin } from 'react-imask'

interface MaskedStyledInputProps {
    inputRef: (ref: HTMLInputElement | null) => void
}

const MaskedStyledInput = IMaskMixin(({ inputRef, ...props }: MaskedStyledInputProps) => (
    <TextField {...props} inputRef={inputRef} />
))

export default MaskedStyledInput
