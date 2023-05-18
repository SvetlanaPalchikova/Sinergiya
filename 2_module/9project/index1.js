// используем querySelector All, он пойайет все файлики которые можно отловить по этому Id
// у querySelector нужно обращаться через решетку#
let cells = document.querySelectorAll('#tik-tak td')
const isVictory = (argCells) => {
    let combs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
for(let comb of combs){
    //comb это одна из комбинаций( [0, 1, 2]) и мы берем ее индексы и сравниваем
    //когда каждая из ячеек  победной комбинации равна другдругу  и не равна пустой строке
    if(argCells[comb[0]].textContent==argCells[comb[1]].textContent
        &&argCells[comb[1]].textContent==argCells[comb[2]].textContent&&
        argCells[comb[0]].textContent != ""){

    }
}
}

// пишем функцию старт, с помощью фор оф каждой ячейке cell
// добавляем слушатель события который на клик меняет текс на Х
const start = (argCells) => {
    let i = 0;
    for (let cell of argCells) {
        cell.addEventListener("click", function turn() {
            if (i % 2 == 0) {
                cell.textContent = "X"
                //чтобы функция не срабатывала два раза одной тойже ячейке удаляем
                cell.removeEventListener("click", turn)
            } else {
                cell.textContent = "O"
                cell.removeEventListener("click", turn)
            }
            i++
        });
    }
}
start(cells)