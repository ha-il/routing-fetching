export async function handleErrorAsync(f: () => Promise<void>) {
  try {
    await f();
  } catch (err) {
    console.error(err);
  }
}
