import { getStatus } from '@/api';
import { spaceTraders } from '@/services/apiClient';
import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';


const GameView = () => {
	const { data: serverStatus } = useQuery({
		queryKey: ['status'],
		queryFn: spaceTraders.getStatus,
	});

	return (
		<Background>
			<Actions>Server status: {serverStatus.message}</Actions>
		</Background>
	);
};

const Background = styled.div`
	min-height: 100vh;
	background: black;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Actions = styled.div`
	display: flex;
	flex-direction: column;
`;

const Action = styled.button``;

const MessageField = styled.p``;

export default GameView;
