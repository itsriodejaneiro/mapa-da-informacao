import * as S from './styled'
import Image from 'next/image'

const items = [
  {
		id: '1',
		name: 'Equipe ITS',
		subItems: [
			{
				id: '11',
				name: 'Ana Carolina Benelli',
			},
			{
				id: '12',
				name: 'Celina Bottino',
			},
			{
				id: '13',
				name: 'Christian Perrone',
			},
			{
				id: '14',
				name: 'Janaina Costa',
			},
			{
				id: '15',
				name: 'Lucas Muniz da Conceição',
			},
			{
				id: '16',
				name: 'Otávio Gomes',
			},
			{
				id: '17',
				name: 'Ronaldo Lemos',
			},
			{
				id: '18',
				name: 'Fabro Steibel',
			},
			{
				id: '19',
				name: 'Nina Desgranges',
			},
			// {
			// 	id: '11',
			// 	name: 'Celina Bottino',
			// },
			// {
			// 	id: '12',
			// 	name: 'Ronaldo Lemos',
			// },
			// {
			// 	id: '13',
			// 	name: 'Victor Vicente',
			// },
		]
	},
	// {
	// 	id: '2',
	// 	name: 'Pesquisadores',
	// 	subItems: [
	// 		{
	// 			id: '21',
	// 			name: 'Claudio Machado',
	// 		},
	// 		{
	// 			id: '22',
	// 			name: 'Fernanda da Escóssia',
	// 		},
	// 		{
	// 			id: '23',
	// 			name: 'Giovanna Bruno Ventre',
	// 		},
	// 	]
	// },
	{
		id: '3',
		name: 'Design e Dataviz',
		subItems: [
			{
				id: '31',
				name: 'Marlus Araújo',
				link: 'http://marlus.com/'
			},
			{
				id: '32',
				name: 'Grama.cc',
				link: 'https://grama.cc/'
			},
		]
	},
	{
		id: '4',
		name: 'Parceria',
		subItems: [
			{
				id: '41',
				name: 'Cláudio Machado',
			},
			{
				id: '42',
				name: 'Diego Cerqueira',
			},
			// {
			// 	id: '41',
			// 	name: 'Armínio Fraga',
			// },
			// {
			// 	id: '42',
			// 	name: 'Luciano Huck',
			// },
		]
	},
]

export default function Footer() {
  return (
    <S.Footer>
			<div className="image-wrapper">
				<Image
					alt="Logo"
					src="/logo-its.svg"
					width={50}
					height={50}
				/>
			</div>
			<S.ItemsWrapper>
				{items.map((item) => (
					<S.Item key={item.id}>
						<S.ColumnTitle>
							{item.name}
						</S.ColumnTitle>
						{item.subItems.map((subitem) => (
							<S.ColumnText key={subitem.id}>
								{subitem.link ? (
									<a href={subitem.link} target="_blank" rel="noopener noreferrer">{subitem.name}</a>
								) : (
									<>{subitem.name}</>
								)}
							</S.ColumnText>
						))}
					</S.Item>
				))}
			</S.ItemsWrapper>
    </S.Footer>
  )
}