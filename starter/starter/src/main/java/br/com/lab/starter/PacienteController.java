package br.com.lab.starter;

import br.com.lab.starter.model.Exame;
import br.com.lab.starter.model.Paciente;
import br.com.lab.starter.model.Procedimento;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.awt.*;

/*O @RestController é apenas o atalho para usar a anotação @Controller e @ResponseBody juntos.*/
@RestController
@RequestMapping(value = "/lab")
public class PacienteController {

    /*@RequestMapping é usada para mapear URLs */
    @RequestMapping(value = "/paciente", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public Paciente getNomePaciente() {
        var paciente = new Paciente();
        paciente.setNome("Victor");
        paciente.setCpf("45284519809");
        paciente.setEmail("rodrigues6297@gmail.com");
        return paciente;
    }

    @RequestMapping(value = "/procedimento", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public Procedimento getInfoProcedimento() {
        var procedimento = new Procedimento();
        procedimento.setCodigo(1);
        procedimento.setNome("Procedimento de coleta");
        procedimento.setPrazo(5);

        return  procedimento;

    }
    @RequestMapping(value = "/exame", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public Exame getInfoExame() {
        var exame = new Exame();
        exame.setPaciente("Victor");
        exame.setProcedimentos("Realizar coleta de sangue");
        exame.setDatacoleta("08/08/2020");
        exame.setDataresultado("13/08/2020");

        return exame;

    }


}

