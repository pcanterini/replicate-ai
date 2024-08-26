import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

const output = await replicate.run(
  "aleksa-codes/flux-ghibsky-illustration:a9f94946fa0377091ac0bcfe61b0d62ad9a85224e4b421b677d4747914b908c0",
  {
    input: {
      model: "dev",
      prompt: "GHIBSKY style, a cat on a windowsill gazing out at a starry night sky and distant city lights",
      lora_scale: 1,
      num_outputs: 1,
      aspect_ratio: "9:16",
      output_format: "jpg",
      guidance_scale: 3.5,
      output_quality: 100,
      num_inference_steps: 28
    }
  }
);

console.log(output);