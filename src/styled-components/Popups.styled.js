import styled, { css } from 'styled-components'

const categoryColors = {
    orange: css`
        background-color: #FFE4C2;
        color: #FF6D00;
    `,
    green: css`
        background-color: #B4FDD1;
        color: #06B16E;
    `,
    purple: css`
        background-color: #E9D4FF;
        color: #9A48F1;
    `,
    gray: css`
        background: #94A6BE;
        color: #FFFFFF;
    `,
}

const primaryHover = css`
    &:hover {
        background-color: #33399b;
    }
`

const outlineHover = css`
    &:hover {
        background-color: #33399b;
        color: #FFFFFF;
    }

    &:hover a {
        color: #FFFFFF;
    }
`

export const PopExit = styled.div`
    display: none;
    width: 100%;
    height: 100%;
    min-width: 320px;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;

    &:target {
        display: block;
    }

`

export const PopExitContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
`

export const PopExitBlock = styled.div`
    display: block;
    margin: 0 auto;
    background-color: #FFFFFF;
    max-width: 370px;
    width: 100%;
    padding: 50px 60px;
    border-radius: 10px;
    border: 0.7px solid #D4DBE5;
    box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);

    @media only screen and (max-width: 375px) {
        padding: 50px 20px;
    }
`

export const PopExitTitle = styled.h2`
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.4px;
    margin-bottom: 20px;
`

export const PopExitForm = styled.form``

export const PopExitFormGroup = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 375px) {
        display: block;
    }
`

const PopExitButton = styled.button`
    height: 30px;
    border-radius: 4px;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    letter-spacing: -0.14px;

    & a {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media only screen and (max-width: 375px) {
        width: 100%;
        height: 40px;
    }
`

export const PopExitYes = styled(PopExitButton)`
    width: 153px;
    background-color: #565EEF;
    border: none;
    color: #FFFFFF;
    margin-right: 10px;

    & a {
        color: #FFFFFF;
    }

    ${primaryHover}

    @media only screen and (max-width: 375px) {
        margin-right: 0;
        margin-bottom: 10px;
    }
`

export const PopExitNo = styled(PopExitButton)`
    width: 153px;
    background-color: transparent;
    border: 0.7px solid #565EEF;
    color: #565EEF;

    & a {
        color: #565EEF;
    }

    ${outlineHover}
`

export const PopUser = styled.div`
    position: absolute;
    top: 61px;
    right: 0;
    width: 213px;
    height: 205px;
    border-radius: 10px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    background: #FFF;
    box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
    padding: 34px;
    text-align: center;
    z-index: 2;
`

export const PopUserName = styled.p`
    color: #000;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: -0.14px;
    margin-bottom: 4px;
`

export const PopUserMail = styled.p`
    color: #94A6BE;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
    margin-bottom: 10px;
`

export const PopUserTheme = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;

    & p {
        color: #000;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: -0.14px;
    }

    & input[type='checkbox'] {
        position: relative;
        width: 24px;
        height: 13px;
        border-radius: 100px;
        background: #EAEEF6;
        outline: none;
        appearance: none;
    }

    & input[type='checkbox']::before {
        content: '';
        position: absolute;
        top: 1px;
        left: 1px;
        width: 11px;
        height: 11px;
        border-radius: 50%;
        background-color: #94A6BE;
        transition: 0.5s;
    }

    & input:checked[type='checkbox']::before {
        left: 12px;
    }
`

export const PopUserButton = styled.button`
    width: 72px;
    height: 30px;
    background: transparent;
    color: #565EEF;
    border-radius: 4px;
    border: 1px solid #565EEF;

    & a {
        color: #565EEF;
    }

    ${outlineHover}
`

const PopOverlay = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);

    @media screen and (max-width: 660px) {
        padding: 0;
        justify-content: flex-start;
    }
`

const PopBlock = styled.div`
    display: block;
    margin: 0 auto;
    background-color: #FFFFFF;
    max-width: 630px;
    width: 100%;
    border-radius: 10px;
    border: 0.7px solid #D4DBE5;
    position: relative;

    @media screen and (max-width: 660px) {
        border-radius: 0;
    }

    @media screen and (max-width: 495px) {
        padding: 20px 16px 32px;
    }
`

export const PopNewCard = styled.div`
    display: none;
    width: 100%;
    min-width: 375px;
    height: 100%;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 6;

    &:target {
        display: block;
    }

    @media screen and (max-width: 660px) {
        top: 70px;
    }
`

export const PopNewCardContainer = styled(PopOverlay)``
export const PopNewCardBlock = styled(PopBlock)`
    padding: 40px 30px 48px;
`
export const PopNewCardContent = styled.div`
    display: block;
    text-align: left;
`
export const PopNewCardTitle = styled.h3`
    color: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    margin-bottom: 20px;
`
export const PopNewCardClose = styled.a`
    position: absolute;
    top: 20px;
    right: 30px;
    color: #94A6BE;
    cursor: pointer;

    &:hover {
        color: #000000;
    }
`
export const PopNewCardWrap = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media screen and (max-width: 660px) {
        display: block;
    }
`
export const NewCardForm = styled.form`
    max-width: 370px;
    width: 100%;
    display: block;
    margin-bottom: 20px;

    @media screen and (max-width: 495px) {
        max-width: 100%;
    }
`
export const FormBlock = styled.div`
    display: flex;
    flex-direction: column;
`
export const FormLabel = styled.label`
    color: #000;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
`
const FormField = styled.input`
    width: 100%;
    outline: none;
    padding: 14px;
    background: transparent;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;

    &::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: #94A6BE;
        letter-spacing: -0.14px;
    }
`
export const NewCardInput = styled(FormField)`
    margin: 20px 0;
`
export const NewCardArea = styled.textarea`
    width: 100%;
    outline: none;
    padding: 14px;
    background: transparent;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;

    &::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: #94A6BE;
        letter-spacing: -0.14px;
    }

    max-width: 370px;
    margin-top: 14px;
    height: 200px;

    @media screen and (max-width: 495px) {
        max-width: 100%;
        height: 34px;
    }
`
export const CreateButton = styled.button`
    width: 132px;
    height: 30px;
    background-color: #565EEF;
    border-radius: 4px;
    border: 0;
    outline: none;
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    color: #FFFFFF;
    float: right;

    ${primaryHover}

    @media screen and (max-width: 495px) {
        width: 100%;
        height: 40px;
    }
`

export const Categories = styled.div`
    margin-bottom: 20px;
`
export const CategoriesLabel = styled.p`
    margin-bottom: 14px;
    color: #000;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
`
export const CategoriesThemes = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: flex-start;
`
export const CategoryTheme = styled.div`
    display: inline-block;
    width: auto;
    height: 30px;
    padding: 8px 20px;
    border-radius: 24px;
    margin-right: 7px;
    opacity: ${({ $active }) => $active ? 1 : 0.4};
    ${({ $color = 'orange' }) => categoryColors[$color]}

    & p {
        font-size: 14px;
        font-weight: 600;
        line-height: 14px;
        white-space: nowrap;
        ${({ $color = 'orange' }) => categoryColors[$color]}
    }
`

export const PopBrowse = styled.div`
    display: none;
    width: 100%;
    height: 100%;
    min-width: 375px;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 7;

    &:target {
        display: block;
    }

    @media screen and (max-width: 660px) {
        top: 70px;
    }
`
export const PopBrowseContainer = styled(PopOverlay)``
export const PopBrowseBlock = styled(PopBlock)`
    padding: 40px 30px 38px;
`
export const PopBrowseContent = styled.div`
    display: block;
    text-align: left;
`
export const PopBrowseTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
`
export const PopBrowseTitle = styled.h3`
    color: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
`
export const PopBrowseWrap = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media screen and (max-width: 660px) {
        display: block;
    }
`
export const BrowseForm = styled.form`
    max-width: 370px;
    width: 100%;
    display: block;
    margin-bottom: 20px;

    @media screen and (max-width: 495px) {
        max-width: 100%;
    }
`
export const BrowseArea = styled.textarea`
    max-width: 370px;
    width: 100%;
    outline: none;
    padding: 14px;
    background: #EAEEF6;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    margin-top: 14px;
    height: 200px;

    &::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: #94A6BE;
        letter-spacing: -0.14px;
    }

    @media screen and (max-width: 495px) {
        max-width: 100%;
        height: 37px;
    }
`
export const Status = styled.div`
    margin-bottom: 11px;
`
export const StatusLabel = styled.p`
    margin-bottom: 14px;
    color: #000;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
`
export const StatusThemes = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
`
export const StatusTheme = styled.div`
    border-radius: 24px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    color: #94A6BE;
    padding: 11px 14px 10px;
    margin-right: 7px;
    margin-bottom: 7px;
    ${({ $color }) => $color ? categoryColors[$color] : ''}

    & p {
        font-size: 14px;
        line-height: 1;
        letter-spacing: -0.14px;
    }
`
export const BrowseCategory = styled.div`
    display: none;
    margin-bottom: 20px;

    @media screen and (max-width: 495px) {
        display: block;
    }
`
export const BrowseTopCategory = styled(CategoryTheme)`
    @media screen and (max-width: 495px) {
        display: none;
    }
`
export const BrowseActions = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;

    & button {
        height: 30px;
        margin-bottom: 10px;
        padding: 0 14px;
    }

    @media screen and (max-width: 495px) {
        & button {
            width: 100%;
            height: 40px;
        }
    }
`
export const ButtonGroup = styled.div`
    & button {
        margin-right: 8px;
    }

    @media screen and (max-width: 495px) {
        width: 100%;

        & button {
            margin-right: 0;
        }
    }
`
export const BrowseButton = styled.button`
    border-radius: 4px;
    border: 0.7px solid #565EEF;
    outline: none;
    background: transparent;
    color: #565EEF;

    & a {
        color: #565EEF;
    }

    ${outlineHover}
`
export const BrowsePrimaryButton = styled.button`
    border-radius: 4px;
    background: #565EEF;
    border: none;
    outline: none;
    color: #FFFFFF;

    & a {
        color: #FFFFFF;
    }

    ${primaryHover}
`
export const BrowseEditActions = styled(BrowseActions)`
    display: none;
`
export const BrowseEditButtonGroup = styled(ButtonGroup)``
export const BrowseEditButton = styled(BrowsePrimaryButton)``
export const BrowseEditOutlineButton = styled(BrowseButton)``
