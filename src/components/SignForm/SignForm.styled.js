import styled from "styled-components";

export const AuthPage = styled.main`
	width: 100%;
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 24px 16px;
	background-color: ${({ theme }) => theme.colors.page};
`;

export const FormCard = styled.div`
	width: 100%;
	max-width: 368px;
	padding: 50px 60px;
	background-color: ${({ theme }) => theme.colors.surface};
	border: 1px solid ${({ theme }) => theme.colors.border};
	border-radius: 10px;
	box-shadow: 0 4px 67px -12px rgb(0 0 0 / 13%);

	@media screen and (max-width: 375px) {
		max-width: 100%;
		padding: 0;
		border: none;
		box-shadow: none;
	}
`;

export const FormTitle = styled.h1`
	margin: 0 0 20px;
	text-align: center;
	font-size: 20px;
	line-height: 30px;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	gap: 7px;
`;

export const FormButton = styled.button`
	width: 100%;
	min-height: 40px;
	margin-top: 13px;
	border: none;
	border-radius: 4px;
	background-color: #565eef;
	color: #ffffff;
	font: inherit;
	font-size: 14px;
	font-weight: 500;

	&:hover {
		background-color: #33399b;
	}
`;

export const FormDescription = styled.p`
	margin: 13px 0 0;
	color: rgb(148 166 190 / 70%);
	font-size: 14px;
	line-height: 150%;
	text-align: center;
`;

export const FormLink = styled.a`
	color: rgb(148 166 190 / 70%);
	text-decoration: underline;
`;

export const ErrorText = styled.p`
	font-size: 12px;
	font-weight: 400;
	line-height: 150%;
	text-align: center;
	color: #F84D4D;
	margin-top: 7px;
	margin-bottom: 20px;
`