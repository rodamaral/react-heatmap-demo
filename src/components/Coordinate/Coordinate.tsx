import FormControl from '@material-ui/core/FormControl'
import React from 'react'
import MaskedTextField from '../MaskedTextField'

interface CoordinateProps {
    label: string
    id: string
    onAccept?: (foo: any, bar: any) => void
    margin?: string
    fullWidth?: boolean
    min: number
    max: number
    name: string
    // FIXME
    inputRef: any
    error: any
    helperText: any
    // inputRef: register<TFieldElement extends FieldElement<TFieldValues>>(ref: (TFieldElement & Ref) | null, rules?: ValidationRules): void;
    // error={errors.latitude !== undefined}
    // helperText={errors.latitude?.message}
}

export default function FormattedInputs(props: CoordinateProps) {
    return (
        <FormControl fullWidth>
            <MaskedTextField
                margin="dense"
                type="text"
                mask={Number} // enable number mask
                scale={6} // digits after point, 0 for integers
                signed={false} // disallow negative
                thousandsSeparator="" // any single char
                padFractionalZeros={false} // if true, then pads zeros at end to the length of scale
                normalizeZeros={true} // appends or removes zeros at ends
                radix="," // fractional delimiter
                mapToRadix={['.']} // symbols to process as radix
                {...props}
            />
        </FormControl>
    )
}
