import React from 'react';
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import styled from 'styled-components';

const Button = styled.form`
    display: flex;
    
`;

function TodoSave(props) {
    return (
        <div>
            <Button type="submit">
                <SaveAltOutlinedIcon />
            </Button>
        </div>
    );
}

export default TodoSave;