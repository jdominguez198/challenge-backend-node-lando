import { Body, Controller, Post } from '@nestjs/common';

@Controller()
export class RadarController {
  constructor() {}

  @Post('radar')
  processCoordinates(@Body() parameters: any): [] {
    console.log('Parameters received: ', parameters);
    return [];
  }
}
