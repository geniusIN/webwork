
<template>
  <fancy-button>팬시버튼</fancy-button>
  <fancy-button>저장하기</fancy-button>
  <slot-modal-layout>
  <template v-slot:header>팝업타이틀</template>
  <template #default>
    <p>팝업컨텐츠</p>
    <p>팝업컨텐츠</p>
  </template>
  <template #footer><button>닫기</button></template>
  </slot-modal-layout>
<hr></hr>
<ProvideInject></ProvideInject>
</template>


<script>
import FancyButton from '@/components/FancyButton.vue';
import SlotModalLayout from '@/components/SlotModalLayout.vue';
import ProvideInject from './ProvideInject.vue';
export default{
  components:{FancyButton, SlotModalLayout, ProvideInject}
}
</script>