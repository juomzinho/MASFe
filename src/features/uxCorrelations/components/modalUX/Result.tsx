import Text from '../../../../components/texts/text/Text'
import * as Styles from './Styles'

const result = [{relation: 'Teste', acs: [{criteria: "Testando criterio"}]}]

const ResultUX = () => {
    return <>
        {result.map((item, index) => 
            {
                return <>
                    <Text text={item.relation} />
                    {item.acs.map((ac) => <Text text={ac.criteria} />)} 
                </>
            }
        )}
    </>
}

export default ResultUX