import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Análise Estrutural',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <p>
        Identifique e desenhe todas as cargas da edificação.<br></br>
        Calcule o valor das cargas relevantes.<br></br>
        Escolha a melhor solução de engenharia estrutural para sua edificação.
      </p>
    ),
  },
  {
    title: 'Dimensionamento',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Posicine e dimensione a geometria dos elementos estruturais.<br></br>
        Identifique a capacidade de resistência de cada elemento estrutural planejado.<br></br>
        Dimensione o volume de concreto e de aço dos elementos estruturais, para atender a necessidade de resistência definida.
      </>
    ),
  },
  {
    title: 'Memorial de Cálculo',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Armazene todos os cálculos e análises feitas.<br></br>
        Codifique scripts para automatizar e replicar os cálculos estruturais.<br></br>
        Codifique scripts para apresentar gráficos das análises.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
