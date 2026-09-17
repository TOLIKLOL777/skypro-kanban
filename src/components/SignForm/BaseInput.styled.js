import styled from "styled-components";

export const StyledInput = styled.input`
	width: 100%;
	padding: 10px 8px;
	border: 1px solid ${({ $error }) => ($error ? "#F84D4D" : "rgb(148 166 190 / 40%)")};
	border-radius: 8px;
	outline: none;
	font: inherit;

	&::placeholder {
		color: #94a6be;
	}

	&:focus {
		border-color: ${({ $error }) => ($error ? "#F84D4D" : "#565eef")};
	}
`;

export const StyledTextarea = styled.textarea`
	width: 100%;
	padding: 10px 8px;
	border: 1px solid ${({ $error }) => ($error ? "#F84D4D" : "rgb(148 166 190 / 40%)")};
	border-radius: 8px;
	outline: none;
	font: inherit;

	&::placeholder {
		color: #94a6be;
	}

	&:focus {
		border-color: ${({ $error }) => ($error ? "#F84D4D" : "#565eef")};
	}
`;