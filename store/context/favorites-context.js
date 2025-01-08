import { createContext, useState } from 'react';

// 컨텍스트의 기본값(초기값)을 정의 : FavoritesContextProvider 없이 FavoritesContext를 사용하면 이 기본값이 반환됨
// FavoritesContext.Provider를 통해 하위 컴포넌트에 공유할 데이터를 전달한다.
export const FavoritesContext = createContext({
	ids: [],
	addFavorite: (id) => {},
	removeFavorite: (id) => {},
});

export default function FavoritesContextProvider({ children }) {
	const [favoriteMealIds, setFavoriteMealIds] = useState([]);

	function addFavorite(id) {
		setFavoriteMealIds((curFavIds) => [...curFavIds, id]);
	}

	function removeFavorite(id) {
		setFavoriteMealIds((curFavIds) =>
			curFavIds.filter((mealId) => mealId !== id),
		);
	}

	// 하위 컴포넌트에서 useContext(FavoritesContext)를 사용해 접근할 수 있는 데이터
	const value = {
		ids: favoriteMealIds,
		addFavorite,
		removeFavorite,
	};

	return (
		<FavoritesContext.Provider value={value}>
			{children}
		</FavoritesContext.Provider>
	);
}
