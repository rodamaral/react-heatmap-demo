import FormControl from '@material-ui/core/FormControl'
import React, { Ref } from 'react'
import MaskedTextField from '../MaskedTextField'

interface CoordinateProps {
    label: string
    id: string
    min: number
    max: number
    name: string
    inputRef?: Ref<any>
    error: boolean
    helperText: string | undefined
    disabled?: boolean
    fullWidth?: boolean
    margin?: string
    onAccept?: (value: any, mask: any) => void
}

export default function FormattedInputs(props: CoordinateProps) {
    return (
        <FormControl fullWidth>
            <MaskedTextField
                margin="dense"
                type="text"
                mask={Number}
                scale={6}
                signed={false}
                thousandsSeparator=""
                padFractionalZeros={false}
                normalizeZeros={true}
                radix=","
                mapToRadix={['.']}
                {...props}
            />
        </FormControl>
    )
}
