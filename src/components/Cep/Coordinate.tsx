import FormControl from '@material-ui/core/FormControl'
import React, { ChangeEvent, useState } from 'react'
import MaskedTextField from '../MaskedTextField'

export default function FormattedInputs() {
    const [value, setValue] = useState<string>('')

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <FormControl fullWidth>
            <MaskedTextField
                label="Latitude"
                value={value}
                onChange={handleChange}
                name="textmask"
                id="formatted-text-mask-input"
                onAccept={(value: any, mask: any) => console.log(value)}
                margin="dense"
                type="email"
                fullWidth
                //
                mask={Number} // enable number mask
                // other options are optional with defaults below
                scale={6} // digits after point, 0 for integers
                signed={false} // disallow negative
                thousandsSeparator="" // any single char
                padFractionalZeros={false} // if true, then pads zeros at end to the length of scale
                normalizeZeros={true} // appends or removes zeros at ends
                radix="," // fractional delimiter
                mapToRadix={['.']} // symbols to process as radix
                // additional number interval options (e.g.)
                min={-90}
                max={90}
            />
        </FormControl>
    )
}
