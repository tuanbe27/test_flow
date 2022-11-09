import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError, AxiosResponse } from 'axios';

@Injectable()
export class EndusersService {
  private readonly logger = new Logger(EndusersService.name);
  constructor(private readonly httpService: HttpService) {}
  async getEndusers(): Promise<any> {
    const { data } = await firstValueFrom(
      this.httpService.get<AxiosResponse>('/v1/customer/endusers').pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        })
      )
    );
    return data;
  }
}
