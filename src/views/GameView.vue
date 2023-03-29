<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field
            type="number"
            label="Size X"
            v-model="sizeX"
            @input="redrawSquares"
          />
        </v-col>
        <v-col>
          <v-text-field
            type="number"
            label="Size Y"
            v-model="sizeY"
            @input="redrawSquares"
          />
        </v-col>
        <v-col>
          <v-btn @click="unLogin">Un login</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <div class="game__area-container">
      <div class="game__area-squares">
        <div v-for="(row, rowIndex) in squares" :key="rowIndex" class="row">
          <div
            v-for="(square, squareIndex) in row"
            :key="squareIndex"
            :class="{ square: true, blue: square.color, white: !square.color }"
            @mouseover="square.color = !square.color"
            @mouseout="square.color = !square.color"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const state = reactive({
      sizeX: 30,
      sizeY: 30,
      squares: [],
    });

    const router = useRouter();

    const redrawSquares = () => {
      state.squares = [];

      for (let i = 0; i < state.sizeY; i++) {
        const row = [];

        for (let j = 0; j < state.sizeX; j++) {
          row.push({ color: false });
        }

        state.squares.push(row);
      }
    };

    const unLogin = () => {
      window.localStorage.removeItem('user')
      router.push("/login");
    }

    redrawSquares();

    return {
      ...toRefs(state),
      redrawSquares,
      unLogin
    };
  },
};
</script>

<style lang="scss">
.row {
  display: flex;
  margin-bottom: 2px;
}

.square {
  width: 36px;
  height: 36px;
  margin-right: 2px;
}

.blue {
  background-color: blue;
}

.white {
  background-color: white;
}
.game__area {
  &-container {
    padding: 30px 0;
    background: #333;
  }

  &-squares {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
}
</style>
