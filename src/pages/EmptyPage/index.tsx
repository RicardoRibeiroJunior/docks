import Empty from '../../assets/empty.png';
import { Container } from './styles';

export function EmptyPage(){
    return(
        <Container>
            <img src={Empty} alt=""/>
            <p>Sem dados para exibir.</p>
        </Container>
    )
}