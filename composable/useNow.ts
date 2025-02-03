export function useNow() {
 const now = ref(new Date());

 const updateNow = () => {
   now.value = new Date();
 };

 onMounted(() => {
   const interval = setInterval(updateNow, 1000);
   onUnmounted(() => clearInterval(interval));
 });

 return { now };
}
